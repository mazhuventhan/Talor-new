import { Button, Card, CardContent } from "@mui/material";
import React from "react";
import Logo from '../Images/logo.gif';
import welcomeLogo from '../Images/ic_welcome_img.png';
import darkLogo from '../Images/app_dark_logo.png';
const Splash = () => {

    return (
        <>
            <div style={{ height: '100vh', overflow: 'hidden',backgroundColor:'#081D3E' }}>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 col-12 align-center" style={{ height: '100vh' }}>
                        <Card elevation={6} className="p-3 w-100" style={{borderRadius:'16px'}}>
                            <CardContent >
                                <div className="text-center">
                                    <img src={darkLogo} alt="logo" style={{ width: '100px' }} /><br />
                                    <img src={welcomeLogo} alt="logo" style={{ width: '200px' }} />
                                </div>
                                <Button onClick={()=>window.location.replace('/login')} className="w-100 mt-3" variant="contained" style={{ textTransform: 'none', backgroundColor: '#52B5E6', height: '50px' }}>Login</Button>
                                <Button onClick={()=>window.location.replace('/register')} className="w-100 mt-3" variant="outlined" style={{ textTransform: 'none', height: '50px',backgroundColor:"white" }}>Sign Up</Button>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    )
}
export default Splash;