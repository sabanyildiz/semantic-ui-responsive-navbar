import { Grid, Image, Segment, Container, Header, Feed } from 'semantic-ui-react'
import { Image as ImageComponent, Item } from 'semantic-ui-react'


const Dashboard = () => {
    return (
     <>
        <Container  
        style={{width:'90vw'}}
        >
     <Grid stackable columns={2}>
    <Grid.Column>
      <Segment
      color='olive'
      raised
       style={{height:'50vh'}}
       size='large'
      >
     <Header 
     color='olive'
        as='h1'
        content='Recent visitors'/>
  <Feed
  size='large'
  >
    <Feed.Event
      image={'https://react.semantic-ui.com/images/avatar/small/laura.jpg'}
      date={'date'}
      summary={'summary'}
      extraText={'extraText'}

    />

    <Feed.Event>
      <Feed.Label image={'https://react.semantic-ui.com/images/avatar/small/laura.jpg'} />
      <Feed.Content date={'01.11.2021 - 10:30'} summary={'Job Interwiew'} extraText={'Emilie Zola'} />
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={'https://react.semantic-ui.com/images/avatar/small/laura.jpg'} />
      <Feed.Content>
        <Feed.Date content={'date'} />
        <Feed.Summary content={'summary'} />
        <Feed.Extra text content={'extraText'} />
      </Feed.Content>
    </Feed.Event>
  </Feed>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment
          style={{height:'50vh'}}
          size='large'
            raised
            color='olive'

      >
      <Header 
      color='olive'
        as='h1'
        content='Reservations'/>
       <Feed
       size='large'>
    <Feed.Event
      image={'https://react.semantic-ui.com/images/avatar/small/laura.jpg'}
      date={'date'}
      summary={'summary'}
      extraText={'extraText'}
    />

    <Feed.Event>
      <Feed.Label image={'https://react.semantic-ui.com/images/avatar/small/laura.jpg'} />
      <Feed.Content date={'01.11.2021 - 10:30'} summary={'Job Interwiew'} extraText={'Emilie Zola'} />
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={'https://react.semantic-ui.com/images/avatar/small/laura.jpg'} />
      <Feed.Content>
        <Feed.Date content={'date'} />
        <Feed.Summary content={'summary'} />
        <Feed.Extra text content={'extraText'} />
      </Feed.Content>
    </Feed.Event>
  </Feed>
      </Segment>
    </Grid.Column>
  </Grid>
    </Container>
     </>
    );
    }

export default Dashboard;