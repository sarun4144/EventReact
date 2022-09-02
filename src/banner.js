import React from 'react'

function randlnt(min, max) {
    let x = (max-min) + 1
  return (
    min + Math.floor(Math.random() * x)
  )
}

export default function Banner() {
    const r = randlnt(1,3)
    let banner = " "
    let url = " "

    switch(r){
        case 1 : 
            banner = './banners/logo-og.png'
            url = 'https://reactjs.org/'
            break
        case 2 : 
            banner = './banners/React-native.png'
            url = 'https://www.reactnative.com/'
            break
        case 3 : 
            banner = './banners/nodejs.png'
            url = 'https://nodejs.org/en/'
            break
        default: break ; 
    }


    const bannerClick = () => {
        window.open(url)
    }
    return(
        <div style={{margin:"20px",textAlign:"center"}}>
            <img src={banner} onClick={bannerClick} style={{cursor:"pointer"}} alt="banner" />

        </div>
    )
}