import React, { useState } from "react"

import Layout from "../components/layout"

const IndexPage = () => {
  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [email, setEmail] = useState("")
  return (
    <Layout>
      <div style={{ fontFamily: " Arial, Helvetica, sans-serif", color: "#282828" }}>
        <div style={{ marginLeft: "5px" }}>
          <h2 style={{
            fontSize: "16px",
            lineHeight: "25px",
            letterSpacing: "0.28px",
            "fontWeight": "bold",
            "marginBottom": "0",
          }}>{name}</h2>
          <h4 style={{
            "color": "#404040",
            "fontSize": "12px",
            "letterSpacing": "0.9px",
            "fontWeight": "300",
            "lineHeight": "14px",
            "marginBottom": "33px",
            "textTransform": "uppercase",
            "marginTop": "3px",
          }}>{position}</h4>
        </div>
        <img width="112" style={{ marginLeft: "5px" }}
             alt={"Therefore logo"}
             src="https://github.com/therefore-ca/email-signatures/raw/master/Logo.png"/>
        <div style={{ paddingLeft: "5px" }}>
          <div style={{
            "fontSize": "12px",
            "marginTop": "0",
            "color": "#404040",
            "fontWeight": "300",
            "letterSpacing": "0",
            "lineHeight": "25px",
            "marginBottom": "15px",
          }}>
            301B-219 Dufferin Street, Toronto, ON, Canada M6K 3J1 <br/>
            <a href={`mailto:${email}`}>{email}</a> | <a href="tel:4166405376">(416) 640-5376</a> | <a
            href="https://therefore.ca/">www.therefore.ca</a>
          </div>
          <div style={{ marginTop: "10px", marginBottom: '15px' }}>
            <a href="https://www.linkedin.com/company/therefore-interactive">
              <img
                style={{ marginRight: "12px" }}
                height="30"
                alt={"LinkedIn"}
                src="https://github.com/therefore-ca/email-signatures/raw/master/linkedin.png"
              />
            </a>
            <a href="https://twitter.com/therefore_io">
              <img
                style={{ marginRight: "12px" }} height="30"
                alt={"Twitter"}
                src="https://github.com/therefore-ca/email-signatures/blob/master/twitter.png?raw=true"
              />
            </a>
            <a href="https://www.instagram.com/therefore_io/">
              <img
                style={{ marginRight: "12px" }} height="30"
                alt={"Instagram"}
                src="https://github.com/therefore-ca/email-signatures/raw/master/instagram.png"
              />
            </a>

          </div>
          <div style={{ marginBottom: '10px' }}>
            Let's build something great together.
          </div>
          <div style={{
            "marginTop": "30px",
            "color": "#ADADAD",
            "fontSize": "10px",
            "fontStyle": "oblique",
            "letterSpacing": "0",
            "lineHeight": "15px",
            "marginBottom": "15px",
          }}>
            This message has been sent as a part of discussion between {name} and the addressee whose name is specified
            above. Should you receive this message by mistake, we would be most grateful if you informed us that the
            message has been sent to you. In this case, we also ask that you delete this message from your mailbox, and
            do not forward it or any part of it to anyone else. Thank you for your cooperation and understanding.
          </div>
        </div>
      </div>
      <form style={{
        marginTop: 100,
        paddingTop: 50,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        borderTop: "5px solid red ",
      }}>
        <input type="text" style={{ height: 50, fontSize: 30, width: 300, boder: "1px solid #ccc", padding: 5 }}
               placeholder={"Name"} value={name} onChange={(e) => {
          setName(e.target.value)
        }}/>
        <input type="text" style={{ height: 50, fontSize: 30, width: 300, boder: "1px solid #ccc", padding: 5 }}
               placeholder={"Position"} value={position} onChange={(e) => {
          setPosition(e.target.value)
        }}/>
        <input type="text" style={{ height: 50, fontSize: 30, width: 300, boder: "1px solid #ccc", padding: 5 }}
               placeholder={"Email"} value={email} onChange={(e) => {
          setEmail(e.target.value)
        }}/>
      </form>
    </Layout>
  )
}

export default IndexPage
