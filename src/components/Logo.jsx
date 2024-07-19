import PropTypes from 'prop-types';

function Logo({ size = '50px' }) {
    return (
        <div style={{
            width: size,
            height: size,
            borderRadius: '50%',
            overflow: 'hidden',
        }}>
            <img
                src="https://as1.ftcdn.net/v2/jpg/04/44/44/42/1000_F_444444251_vEpYXoE2bZnQGFbsbdtn36VKTQHOWA2T.jpg"
                style={{
                    width: '100%',
                    height: 'auto'
                }}
                alt="Logo"
            />
        </div>
    );
}

Logo.propTypes = {
    size: PropTypes.string,
};

export default Logo;