import Link from "next/link"
import Head from 'next/head'

const users = [
  {id:1, name:"James"},
  {id:2, name:"Martin"},
  {id:3, name:"Danial"},
]

export default function Home() {
  return (
      <div>
      <Head>
          <title>{users.name}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <h1>{users.name}</h1>
          <p>{users.name}</p>
        <ul>
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
              {users.map((user) => (
                  <ul key = {user.id}>
                      <Link href={`/user/${encodeURIComponent(user.id)}`}>
                          <a>{user.name}</a>
                      </Link>
                  </ul>
              ))}
          </li>
        </ul>
      </div>
  )
}
