export default function TodoPage() {
    const params = useParams();
    console.log(params);
    return (

        <main>
            <h1>todo {params.id}</h1>
            <h1>{params.title}</h1>
        </main>

    );
}