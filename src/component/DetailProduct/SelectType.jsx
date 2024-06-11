import PropTypes from 'prop-types'

function SelectType(props) {

    const {obj, label, position, setPosition} = props

    return (
        <>
            {obj && <strong className="mt-2 flex">{label}</strong>}
            <div className="flex gap-3">
                {obj && obj?.map(item => (
                    <p className={`${position === item.id ? 'border-red-500 text-main-brown-700' : 'text-gray-400 border-gray-400'} text-sm border cursor-pointer px-3 py-1 mt-1 ${item.outOfStock && 'hidden'}`} key={item.id} onClick={() => setPosition(item.id)}>
                        {item.name}
                    </p>
                ))}
            </div>
        </>
    );
}

SelectType.propTypes = {
    obj: PropTypes.any,
    label: PropTypes.string,
    position: PropTypes.number,
    setPosition: PropTypes.any
};

export default SelectType;