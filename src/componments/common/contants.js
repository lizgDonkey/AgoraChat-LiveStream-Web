import store from '../../redux/store'


export const defaultAvatarUrl = "https://download-sdk.oss-cn-beijing.aliyuncs.com/downloads/IMDemo/avatar/Image1.png"

export const giftObj = {
    gift_1: {
        gift_img: "pinkHeart.png",
        goldCoins: "gold.png",
        gift_price: 1, 
        gift_name: "PinkHeart"
    },
    gift_2:{
        gift_img: "pinkFlowers.png", 
        goldCoins: "gold.png", 
        gift_price: 5, 
        gift_name: "PlasticFlower"
    },
    gift_3: {
        gift_img: "thePushBox.png", 
        goldCoins: "gold.png", 
        gift_price: 10, 
        gift_name: "ThePushBox"
    },
    gift_4: {
        gift_img: "bigAce.png", 
        goldCoins: "gold.png", 
        gift_price: 20, 
        gift_name: "BigAce"
    },
    gift_5: {
        gift_img: "star.png", 
        goldCoins: "gold.png", 
        gift_price: 50, 
        gift_name: "Star"
    },
    gift_6: {
        gift_img: "lollipop.png", 
        goldCoins: "gold.png", 
        gift_price: 100, 
        gift_name: "Lollipop"
    },
    gift_7: {
        gift_img: "diamond.png", 
        goldCoins: "gold.png", 
        gift_price: 500, 
        gift_name: "Diamond"
    },
    gift_8: {
        gift_img: "crown.png", 
        goldCoins: "gold.png", 
        gift_price: 1000, 
        gift_name: "Crown"
    }
}

export const isChatroomAdmin = (userId) => {
    let adminAry = store.getState()?.roomAdmins
    return adminAry.includes(userId);
}

