import { Page, Layout } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { ProductUpdateTable } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="Bulk Product Updater" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <ProductUpdateTable />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
