import './Card.css';

export default function Card(props) {
    return (
            <div className="card">
                <img
                    className="card-image"
                    key={props.key}
                    src={`${props.path}/image${props.imageNumber}.jpg`}
                    alt={props.path}
                />
        </div>
    )
}