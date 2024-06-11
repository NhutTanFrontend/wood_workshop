import PropTypes from 'prop-types'

function TitleSection(props) {

    const { title, white } = props

    return (
        <div>
            <h3 className={`${white ? 'text-white' : 'text-black'} text-center text-2xl font-semibold`}>{title}</h3>
            <hr className='w-[120px] h-1 bg-main-brown-700 mt-2 mx-auto' />
        </div>
    );
}

TitleSection.propTypes = {
    title: PropTypes.string,
    white: PropTypes.any,
};

export default TitleSection;