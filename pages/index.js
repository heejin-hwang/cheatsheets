import Link from "next/link"
import Head from 'next/head'
import {Button, Card, Pane, SearchInput, Text} from 'evergreen-ui'
import {useState} from "react";

const users = [
  {id:1, name:"James"},
  {id:2, name:"Martin"},
  {id:3, name:"Danial"},
]

export default function Home() {
    const [input, setInput ] = useState();
  return (
      <div>
      <Head>
          <title>{users.name}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
          <SearchInput placeholder="무엇이 궁금하니" width="100%" onChange={e=> setInput(e.target.value)} onKeyDown={e => {if(e.keyCode === 13) {console.log('input', input)}}}/>
          <Button>I am using 🌲 Evergreen!</Button>
          <Card
              height={120}
              width={240}
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="default"
          >
              <Text>Pane</Text>
          </Card>
      </div>
  )
}
