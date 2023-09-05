import s from './Preview.module.css'


export const Preview = ()=> {
        return (
            <div className={s.previewStyle}>
                    <h1 className={s.header}>The different Custom Component</h1>
                    <p className={s.helloText}>
                            I am trying to create my own components so that they can be reused in the future.
                            Besides, it's good practice. About me. I am 
                    </p>
            </div>
        )
}