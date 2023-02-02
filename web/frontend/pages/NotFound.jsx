import { Card, Page } from "@shopify/polaris";

export default function NotFound() {
  return (
    <Page>
      <Card>
        <Card.Section>
          <p>
            Check the URL and try again, or use the search bar to find what you
            need.
          </p>
        </Card.Section>
      </Card>
    </Page>
  );
}
