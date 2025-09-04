const { useState } = React;

function App() {
  const productsData = [
    { name: 'کفش ورزشی', price: 350000 },
    { name: 'کتونی سفید', price: 420000 },
    { name: 'پیراهن مردانه', price: 280000 },
    { name: 'شلوار جین', price: 390000 },
  ];

  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [proxy, setProxy] = useState(false);

  const filteredProducts = productsData.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`سفارش ثبت شد برای ${name} با وکالت‌نامه: ${proxy ? 'بله' : 'خیر'}`);
    setName('');
    setProxy(false);
  };

  return React.createElement('div', null,
    React.createElement('h1', null, '🛒 فروشگاه ساده'),

    React.createElement('input', {
      type: 'text',
      placeholder: 'جستجوی کالا...',
      onChange: (e) => setFilter(e.target.value)
    }),

    React.createElement('h2', null, '📋 لیست کالاها'),
    React.createElement('ul', null,
      filteredProducts.map((p, i) =>
        React.createElement('li', { key: i }, `${p.name} - ${p.price.toLocaleString()} تومان`)
      )
    ),

    React.createElement('form', { onSubmit: handleSubmit },
      React.createElement('h2', null, '🧾 ثبت سفارش'),
      React.createElement('input', {
        type: 'text',
        placeholder: 'نام شما',
        value: name,
        onChange: (e) => setName(e.target.value),
        required: true
      }),
      React.createElement('br'),
      React.createElement('label', null,
        React.createElement('input', {
          type: 'checkbox',
          checked: proxy,
          onChange: (e) => setProxy(e.target.checked)
        }),
        ' ثبت با وکالت‌نامه'
      ),
      React.createElement('br'),
      React.createElement('button', { type: 'submit' }, 'ثبت سفارش')
    ),

    React.createElement('div', null,
      React.createElement('h2', null, '🔐 پنل مدیریت'),
      React.createElement('p', null, `تعداد کل کالاها: ${productsData.length}`)
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));