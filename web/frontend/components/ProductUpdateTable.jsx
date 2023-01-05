import { IndexTable, Card, useIndexResourceState } from "@shopify/polaris";
import React from "react";
import { ImgDropZone } from "./DropZone";

export function ProductUpdateTable() {
  const customers = [
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
    singular: "customer",
    plural: "customers",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(customers);

  const rowMarkup = customers.map(
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
      <IndexTable
        resourceName={resourceName}
        itemCount={customers.length}
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
