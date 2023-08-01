import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const dataSource = [
    {
        key: '1',
        name: 'Add free',
        age: 32,
        basic: <CloseOutlined className='redCross' />,
        pro: <CheckOutlined className='greenTick' />,
        'pro+': <CheckOutlined className='greenTick' />,
        premium: <CheckOutlined className='greenTick' />
    },
    {
        key: '2',
        name: 'Charts',
        basic: <CloseOutlined className='redCross' />,
        pro: <CheckOutlined className='greenTick' />,
        'pro+': <CheckOutlined className='greenTick' />,
        premium: <CheckOutlined className='greenTick' />
    },
    {
        key: '3',
        name: 'Export chart data',
        basic: <CloseOutlined className='redCross' />,
        pro: <CloseOutlined className='redCross' />,
        'pro+': <CheckOutlined className='greenTick' />,
        premium: <CheckOutlined className='greenTick' />
    },
    {
        key: '4',
        name: 'Intraday charts based on custom formulas (spreads)',
        basic: <CloseOutlined className='redCross' />,
        pro: <CheckOutlined className='greenTick' />,
        'pro+': <CloseOutlined className='redCross' />,
        premium: <CheckOutlined className='greenTick' />
    },
    {
        key: '5',
        name: 'active price alerts',
        basic: <CloseOutlined className='redCross' />,
        pro: <CloseOutlined className='redCross' />,
        'pro+': <CheckOutlined className='greenTick' />,
        premium: <CheckOutlined className='greenTick' />
    },
    {
        key: '6',
        name: 'Volume profile indicators',
        basic: <CloseOutlined className='redCross' />,
        pro: <CloseOutlined className='redCross' />,
        'pro+': <CheckOutlined className='greenTick' />,
        premium: <CheckOutlined className='greenTick' />
    },
    {
        key: '7',
        name: 'Custom time intervals',
        basic: <CloseOutlined className='redCross' />,
        pro: <CloseOutlined className='redCross' />,
        'pro+': <CloseOutlined className='redCross' />,
        premium: <CheckOutlined className='greenTick' />
    },
    {
        key: '8',
        name: 'Take paper trades',
        basic: <CheckOutlined className='greenTick' />,
        pro:<CheckOutlined className='greenTick' />,
        'pro+': <CheckOutlined className='greenTick' />,
        premium: <CheckOutlined className='greenTick' />
    },
];

const columns = [
    {
        title: 'Compare Plans',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Basic',
        dataIndex: 'basic',
        key: 'basic',
    },
    {
        title: 'Pro',
        dataIndex: 'pro',
        key: 'pro',
    },
    {
        title: 'Pro +',
        dataIndex: 'pro+',
        key: 'pro+',
    },
    {
        title: 'Premium',
        dataIndex: 'premium',
        key: 'premium',
    },

];

export { dataSource, columns };