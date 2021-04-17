import H1 from 'shared/headings/h1'
import H2 from 'shared/headings/h2'
import Page from 'shared/Page'

export default function Index() {
  return (
    <Page>
      <H1>Hey, I’m Marcus</H1>
      <H2>Hello</H2>
      <h3>Hello</h3>
      <p>
        The animate prop can accept an object of values. When one of them
        changes, the motion component will automatically animate to the new
        state.
      </p>
    </Page>
  )
}
