function Image({data}) {

  return (

    <div className="max-w-xs md:max-w-lg p-2 ">
        <img src={`https:${data.fields.file.url}`}
        height={data.fields.file.details.image.height} 
        width={data.fields.file.details.image.width}
        className='object-cover bg-primary/50 shadow shadow-primary'
        loading="lazy"/>
    </div>

    );
}

export default Image;
