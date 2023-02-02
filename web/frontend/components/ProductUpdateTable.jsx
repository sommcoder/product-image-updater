import {
  IndexTable,
  TextField,
  Card,
  useIndexResourceState,
  Filters,
  Select,
} from "@shopify/polaris";
import React, { useState, useCallback } from "react";
import { ImgDropZone } from "./DropZone";
// import Shopify from "shopify-api-node";

// fetch();

// const products = await shopify.rest.Product.all({
//   session: session,
// });

export function ProductUpdateTable() {
  /*

GET
1) retireve a list of products
2) populate the polaris components with what we GET

POST
1) upon submitting changes POST to the server
2) GET the newly changed results back synchronously after we POST
 
*/

  const products = [
    {
      handle: "3411",
      title: "Dom Perignon",
      body: "Mae Jemison",
      category: "wine",
      published: "FALSE",
      vendor: "Decatur, USA",
      qty: "12",
      price: "$2,400",
    },
    {
      handle: "1623",
      title: "Chateau Petrus",
      body: "Brian Davies",
      category: "wine",
      published: "FALSE",
      vendor: "Decatur, USA",
      qty: "12",
      price: "$200",
    },
    {
      handle: "1623",
      title: "Baby Duck",
      body: "Brian Davies",
      category: "wine",
      published: "FALSE",
      vendor: "Decatur, USA",
      qty: "12",
      price: "$200",
    },
    {
      handle: "1623",
      title: "Babe Rose",
      body: "Brian Davies",
      category: "wine",
      published: "FALSE",
      vendor: "Decatur, USA",
      qty: "12",
      price: "$200",
    },
    {
      handle: "1623",
      title: "Whispering Angel",
      body: "Brian Davies",
      category: "wine",
      published: "FALSE",
      vendor: "Decatur, USA",
      qty: "12",
      price: "$200",
    },
    {
      handle: "1623",
      title: "Kim Crawford",
      body: "Brian Davies",
      category: "wine",
      published: "FALSE",
      vendor: "Decatur, USA",
      qty: "12",
      price: "$200",
    },
  ];

  const resourceName = {
    singular: "product",
    plural: "products",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(products);

  const [taggedWith, setTaggedWith] = useState("VIP");
  const [queryValue, setQueryValue] = useState(null);
  const [sortValue, setSortValue] = useState("today");

  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    []
  );
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
  const handleClearAll = useCallback(() => {
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [handleQueryValueRemove, handleTaggedWithRemove]);
  const handleSortChange = useCallback((value) => setSortValue(value), []);

  const filters = [
    {
      key: "taggedWith",
      label: "Tagged with",
      filter: (
        <TextField
          label="Tagged with"
          value={taggedWith}
          onChange={handleTaggedWithChange}
          autoComplete="off"
          labelHidden
        />
      ),
      shortcut: true,
    },
  ];

  const appliedFilters = !isEmpty(taggedWith)
    ? [
        {
          key: "taggedWith",
          label: disambiguateLabel("taggedWith", taggedWith),
          onRemove: handleTaggedWithRemove,
        },
      ]
    : [];

  const sortOptions = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  const rowMarkup = products.map(
    (
      { handle, title, body, category, published, vendor, qty, price },
      index
    ) => (
      <IndexTable.Row
        id={handle}
        key={index}
        selected={selectedResources.includes(handle)}
        position={index}
      >
        <IndexTable.Cell>{title}</IndexTable.Cell>
        <IndexTable.Cell>
          <ImgDropZone />
        </IndexTable.Cell>
        <IndexTable.Cell>{handle}</IndexTable.Cell>
        <IndexTable.Cell>{body}</IndexTable.Cell>
        <IndexTable.Cell>{category}</IndexTable.Cell>
        <IndexTable.Cell>{published}</IndexTable.Cell>
        <IndexTable.Cell>{vendor}</IndexTable.Cell>
        <IndexTable.Cell>{qty}</IndexTable.Cell>
        <IndexTable.Cell>{price}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <Card>
      <div style={{ padding: "16px", display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Filters
            queryValue={queryValue}
            filters={filters}
            appliedFilters={appliedFilters}
            onQueryChange={setQueryValue}
            onQueryClear={handleQueryValueRemove}
            onClearAll={handleClearAll}
          />
        </div>
        <div style={{ paddingLeft: "0.25rem" }}>
          <Select
            labelInline
            label="Sort by"
            options={sortOptions}
            value={sortValue}
            onChange={handleSortChange}
          />
        </div>
      </div>
      <IndexTable
        resourceName={resourceName}
        itemCount={products.length}
        selectedItemsCount={
          allResourcesSelected ? "All" : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          { title: "Title" },
          { title: "Images" },
          { title: "Handle" },
          { title: "Body" },
          { title: "Category" },
          { title: "Published" },
          { title: "Vendor" },
          { title: "#" },
          { title: "Price" },
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
}

function disambiguateLabel(key, value) {
  switch (key) {
    case "taggedWith":
      return `Tagged with ${value}`;
    default:
      return value;
  }
}

function isEmpty(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else {
    return value === "" || value == null;
  }
}
