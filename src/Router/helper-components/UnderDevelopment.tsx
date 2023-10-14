import ErrorIcon from '@mui/icons-material/Error';
import s from './underDevelopment.module.css'


export const UnderDevelopment  = ()=> {
    return (
    <div className={s.wrapper}>
        <div className={s.header}>
            <ErrorIcon sx={{ fontSize: 55, color: 'red'}} />
            <h2>Sorry, this component is under development.</h2>
        </div>
        <p>We are working hard on it. Please try again later.</p>
    </div>
    )
}