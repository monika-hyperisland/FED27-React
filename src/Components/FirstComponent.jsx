import {SecondComponent} from "./SecondComponent";
import styles from "./FirstComponent.module.css";

export function FirstComponent({user}) {

    // if (!user) {
    //     return <SecondComponent />;
    // }

    return (
        <>
            <h1 className={styles.title}>Hi {user.name}</h1>
        </>

    )
}
