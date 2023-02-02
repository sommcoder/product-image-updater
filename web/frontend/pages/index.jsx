import { Page, Layout, Button } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { ProductUpdateTable } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="Bulk Product Updater" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <ProductUpdateTable />
          <Button
            style="--p-interactive-pressed"
            submit={true}
            size="large"
            id="update-submit-btn"
          >
            Update Products
          </Button>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
