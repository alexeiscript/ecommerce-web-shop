import { Grid } from '@material-ui/core'
import Product from './Product/Product'

import useStyles from './styles'

const products = [
    {id: 1, name: 'Shoes', description: 'Nike Shoes', price: '$50', image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi3.stycdn.net%2Fimages%2F2012%2F12%2F51%2Farticle%2Fnike%2Fso55402702%2Fnike-eastham-schuhe-grey-white-940-zoom-0.jpg&f=1&nofb=1'},
    {id: 2, name: 'Laptop', description: 'ASUS Laptop', price: '$999', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.asus.com%2Fid%2FLaptops%2FASUS-Laptop-E402WA%2Fwebsites%2Fglobal%2Fproducts%2F3tcXKZ5TbCLp2epf%2Fimg%2F01%2Ffg.png&f=1&nofb=1'}
]

const Products = () => {
    const classes = useStyles()
    if (!products.length) return <p>Loading...</p>;

    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products