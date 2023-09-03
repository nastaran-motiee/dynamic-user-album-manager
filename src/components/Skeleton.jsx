import classNames from 'classnames';

/**
 * Skeleton
 * @param {*} param0 
 * @returns 
 */
const Skeleton = ({ times , className}) => {
    const outerClassNames = classNames(
        'relative',
        'overflow-hidden', 'bg-gray-200',
        'rounded',
        'mb-2.5',
        className
    );
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolue',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    )
    const boxes = Array(times).fill(0)
        .map((_, i) =>
            <div key={ i } className={ outerClassNames }>
                <div className={ innerClassNames } />
            </div>
        );

    return  boxes;
};

export default Skeleton;