const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  const listRef = document.querySelector('#gallery');
  
  

  images.map((value, i, array) => {

    listRef.insertAdjacentHTML('beforeend', '<li><img></li>');
    const imgRef = document.querySelectorAll('#gallery img')
    
    imgRef.forEach((img, index, arr) => {arr[index].setAttribute('src', array[index].url);
    arr[index].setAttribute('alt', array[index].alt)
    arr[index].setAttribute('width', '300');
    arr[index].setAttribute('height', '200')} );
  })
  console.log(listRef);
 const itemRef = document.querySelectorAll('#gallery li').forEach(item => { item.style.display = 'inline-flex';
 item.style.flexDirection = 'row'});
