import { Segment, Image, Menu, Button, Icon, Container, Grid, Sidebar, Search } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import logo  from '../assets/logo.png';
import 'semantic-ui-css/semantic.min.css'
import './Navbar.css'

const Navbar = () => {
  

const [hidemenu, setHidemenu] = useState(false)




    return (
        <>
    <Container
    fluid
    style={{width:'90vw',padding:'0'}}
    >
         

    <Grid columns={2} 
     >
      <Grid.Row only='computer' columns={1}>
        <Grid.Column>
        <Segment 
       as={Menu}
       icon='labeled'
       inverted
       color='olive'
       style={{display:'flex',justifyContent:'space-between', alignItems:'center',justifyContent:'space-between'}}
      
          
       >
           <Image src={logo}
           size='tiny'
           rounded
           />
 
          
          <Menu.Item
            name='home'
            icon='home'
            
           />
            <Menu.Item
            name='Settings'
            icon='settings'
           />
    <Menu.Item
            name='Statistics'
               icon='chart bar'
           />
    <Menu.Item
            name='New Record'
               icon='plus'
           />
    <Menu.Item
            name='Profile'
               icon='user'
           />
    <Menu.Item
            name='logout'
               icon='sign-out'
           />
   
       </Segment>
        </Grid.Column>
        </Grid.Row>
           <Grid.Row columns={1}>

<Grid.Column 
only='mobile tablet'
>


   <Segment 
  inverted
  icon='labeled'
  color='olive'
  style={{display:'flex',justifyContent:'space-between', flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}
  >
      <Image src={logo}
      rounded
      size='mini'
      />

   <Search 
   icon={<Icon name='users' inverted circular link color='olive' />}
   placeholder='Search visitors...'
   />

<Icon as={Button} 
icon='sidebar'
inverted
circular
size='large'
onClick={()=>setHidemenu(true)}
color='olive' />
  </Segment>

  <Grid.Column only='mobile tablet'>
 <Sidebar
  as={Menu}
  animation='push'
  direction='right'
  icon='labeled'
  vertical
  visible={hidemenu}
  color='olive'
  inverted
  onHide={()=>setHidemenu(false)}
  
    >
       <Menu.Item
      icon='close'
      onClick={()=>setHidemenu(false)}

           />
         <Menu.Item
       as='a'
       name='home'
       icon='home'

         />
       <Menu.Item
       as='a'
       name='Settings'
       icon='settings'
         />
       <Menu.Item
       as='a'
       name='Statistics'
       icon='chart bar'
           />
      <Menu.Item
       as='a'
       name='New Record'
       icon='plus'
           />
      <Menu.Item
      as='a'
      name='Profile'
      icon='user'
           />
      <Menu.Item
       as='a'
       name='logout'
       icon='sign-out'
           />
       </Sidebar>

       </Grid.Column>

    </Grid.Column> 
       </Grid.Row>
           </Grid>
    </Container>
        
            </>

    )
}

export default Navbar



   
    
  