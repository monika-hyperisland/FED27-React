
export function SectionWithImage({title, text, imageSrc, imagePosition}) {



    return (
        <div>
            <h1>{title}</h1>
            <div className={imagePosition === 'left' ? `${styles.imageLeft}`: `${styles.imageRight}`}>
                <img src={imageSrc} alt={title} />
                <p>{text}</p>
                {imagePosition === 'left' ?
                    <>
                        <img src={imageSrc} alt={title} />
                        <p>{text}</p>
                    </>
                    :
                    <>
                        <p>{text}</p>
                        <img src={imageSrc} alt={title} />
                    </>
                }
            </div>
        </div>
    )

}