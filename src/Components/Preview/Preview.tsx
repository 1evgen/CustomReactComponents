import s from './Preview.module.css'

export const Preview = () => {
    return (
        <div className={s.previewStyle}>
            <h1 className={s.header}>The different Custom Component</h1>
            <p className={s.helloText}>
                Welcome to our pet project, Custom Components! Here you will find a collection of unique components
                that we've created for our own enjoyment and practice. Our components are designed to make your code
                more organized and structured.
                We're not here to introduce any grandeur or provide you with a mass-market product. This is simply a
                playground for experimentation, where we can develop and test interesting components. If you find
                something here that you like, feel free to use it in your own projects.
                Explore our components, try them out, and customize them to fit your needs. We hope they will help make
                your pet project more interesting and creative.
                Thanks for stopping by, and remember, in development, the most important thing is to have fun!
            </p>
        </div>
    )
}