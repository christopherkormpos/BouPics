export default function Card(props) {
    return (
        <div>
            <img
                key={props.key}
                src={`${props.path}/image${props.imageNumber}.jpg`}
                alt={props.path}
            />
        </div>
    )
}