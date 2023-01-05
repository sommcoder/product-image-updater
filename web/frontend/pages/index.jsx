import { Page, Layout } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { ImgDropZone, ProductUpdateTable } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <ProductUpdateTable />
        </Layout.Section>
        <Layout.Section>
          <ImgDropZone />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
