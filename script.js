const imagesUrl =[
    'https://i.ibb.co/VNZ8Kt9/kisspng-vector-graphics-laptop-computer-icons-creative-mar-halalweb-5d25b0c7215dc3-63919302156275117.png',
    'https://i.ibb.co/b3FqpYf/banner2.png',
    'https://i.ibb.co/C245mSv/Kawasaki-Ninja.jpg',
    'https://i.ibb.co/WW8gxzs/banner1.jpg',
    'https://i.ibb.co/yhwrRLv/Aprilia-RSV4-1100-Factory.jpg'
]

let index = 0
setInterval(() => {
    const imageId = document.getElementById('image-id');
    if(index >=imagesUrl.length){
        index=0;
    }
    const imageUrl = imagesUrl[index]
    index++;
    imageId.setAttribute('src', imageUrl);
},1000)