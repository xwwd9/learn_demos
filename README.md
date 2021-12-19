# learn_demos

## strapi 通过某个参数查询， 比如查询slug

api?slug=***

## Link

显示连接的时候会显示成as的
<Link href="/movies/[genre]/[slug]" as={`/movies/${movie.genre.slug}/${movie.slug}`}>

movie只通过了slug获取， 没有通过genre

【genre】 【slug】 可以通过以下后去 const { slug } = context.query // 斜杠和？后面的都会在query中？

#

getServerSideProps返回的值 return { props: { movie: data[0]
}, } 可以直接在函数中解析出来 function Movie({ movie })

# strapi _limit  _start 来实现分页查询

# 打开strapi的count接口来进行个数查询

# useRouter

# next-seo 插件进行seo

# quick source viewer

# context api

```js
const HeaderContext = createContext(null)

function ContextWrapper({children, navigation}) {
    const [menuItems] = useState(navigation)
    const [color, toggleColor] = useState(true)

    return (
        <HeaderContext.Provider value={{menuItems, color, toggleColor}}>
            {children}
        </HeaderContext.Provider>
    )
}


// 将需要context api的组件包裹起来
<ContextWrapper navigation={navigation}>
    <Navigation/>
</ContextWrapper>

// 在Navigation组件中就可以使用menuItems, color, toggleColor
function Navigation() {
    const router = useRouter()
    console.log(router)
    const { menuItems, color } = useContext(HeaderContext)

    return (
        <NavigationStyled color={color}>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <Link href={item.slug}>
                            <a className={router.pathname === item.slug ? 'active' : '' }>{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </NavigationStyled>
    )
}

```
