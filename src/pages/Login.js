import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../assets/logo.png';


const LoginForm = () => (
  <Grid textAlign='center'  style={{ height: 'full', backgroundColor:'olive'}} verticalAlign='middle'>
    <Grid.Column  style={{ maxWidth: 450 }}>
      <Header as='h2'  inverted textAlign='center'>
        <Image src={logo}
        rounded 
        size='xl'
        fluid

        
        /> Login
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='olive' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message color='olive'>
        No account ?  <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm