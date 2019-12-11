import React from 'react'
import { Footer } from 'mdbreact'

const FooterComponent = () => (
  <div>
    <Footer id='footer'>
        &copy; Book Library {(new Date().getFullYear())}
    </Footer>
  </div>
)

export default FooterComponent
