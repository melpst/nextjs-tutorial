import Link from 'next/link'

const style = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '10px 10px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={style}>Home</a>
    </Link>
    <Link href="/transaction">
      <a style={style}>Transaction</a>
    </Link>
    <Link href="/dynamic?name=Gie">
      <a style={style}>Dynamic</a>
    </Link>
  </div>
)

export default Header