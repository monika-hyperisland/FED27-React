export function About({ user }){
    return(
        <section>
            <h2>About {user.name}</h2>
            <p>Age: {user.age}</p>
        </section>
    )
}