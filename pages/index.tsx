import { ConnectWallet, MediaRenderer, useAddress, } from "@thirdweb-dev/react";

import { NextPage } from "next";
import EmailLogin from "../components/EmailLogin";
import { SocialLoginButton } from "../components/SocialLogin";

const Home: NextPage = () => {
const address = useAddress();

  return (
   <div>
    {address ? (
      <ConnectWallet/>
    ) : (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          height: '100vh',
        }}>
          <div style={{
            padding: '0.5rem 1rem',
          }}>
            <MediaRenderer
            src={"/images/logo.png"}
            height="48px"
            width="48px"
            />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              borderBottom: "1px solid #EEE",
              height: "100%",
           }}>
            <div style={{
              minWidth:"80%",
            }}>
              <h1> Sign In</h1>
              <EmailLogin/>
              <div style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '2rem',
                marginBottom: '1rem',
                color: '#CCC'
              }}>
                <hr style ={{ width: "45%", borderTop: "1px solid #CCC"}}/>
                <p> or </p>
                <hr style ={{ width: "45%", borderTop: "1px solid #CCC"}}/>

              </div>
              <SocialLoginButton strategy="facebook"/>
              <SocialLoginButton strategy="google"/>
              <SocialLoginButton strategy="apple"/>
            </div>
            </div>
      </div>
        </div>
        <div style={{
           display: 'flex',
           flexDirection: 'column',
           width: '45%',
           height: '220vh',
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: '#EEE',
           backgroundImage: 'url(/images/lol.jpg',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
        }}>

      </div>
      </div>
    )

    }
   </div>
  );
};

export default Home;
