import './App.css';
import {
    Badge,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    createTheme,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    OutlinedInput,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

    //Theme

    const theme = createTheme({
        palette: {
            primary: {
                main: '#001219',
            },
            neutral: {
                main: '#219EBC',
            },
            inviting: {
                main: '#FFB703'
            }
        },
    });

    //Initialize UseStates

    const [textValue1, setTextValue1] = useState("");
    const [textValue2, setTextValue2] = useState("");
    const [textValue3, setTextValue3] = useState("");

    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [url, setURL] = useState()

    const [shoppingCart, setShoppingCart] = useState([])

    const [data, setData] = useState(
        [
            {
                name: 'Rad Shirt ',
                price: '100',
                image: 'https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png'
            },
            {
                name: 'Kickin` Cloth ',
                price: '50',
                image: 'https://moodle.com/wp-content/uploads/2021/06/22087-11.jpg'
            },
            {
                name: 'Bodacious Fabric ',
                price: '40',
                image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566927496-button-down-4-1566927485.jpg'
            },
            {
                name: 'Cool Garb ',
                price: '40',
                image: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C51Cn1jk9uGL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png'
            },
            {
                name: 'Rad Shirt v1',
                price: '10',
                image: 'https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800'
            },
            {
                name: 'Kickin` Cloth v2',
                price: '5',
                image: 'https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/332Wx332H-422519-0320.jpg'
            },
            {
                name: 'Bodacious Fabric v3',
                price: '4',
                image: 'https://www.stoneycreek.co.nz/image/catalog/0_PRODUCT_PAGES/3_CORPORATE/1_MENS/3_MID%20LAYER/Corporate%20Shirts/Long%20Sleeve/C3224_Stoney_Creek_Corporate_Longsleeve_Shirt_Front_Black_Gingham_2000px.png'
            },
            {
                name: 'Cool Garb v4',
                price: '9',
                image: 'https://4.imimg.com/data4/JT/XP/MY-27510575/mens-casual-shirts-500x500.jpg'
            }
        ]
    )

    // Functions

    function onTextURLChange(e) {
        setTextValue1(e.target.value)
        setURL(e.target.value)
        console.log(url)
    }

    function onTextNameChange(e) {
        setTextValue2(e.target.value)
        setName(e.target.value);
        console.log(name)
    }

    function onTextPriceChange(e) {
        setTextValue3(e.target.value)
        setPrice(e.target.value);
        console.log(price)
    }

    // Resets inputboxes

    function handleReset() {
        setTextValue1('');
        setTextValue2('')
        setTextValue3('')
    }

    // Pushes/Uploads new product into grid

    function uploadData() {
        let arr = [...data]
        arr.push({image: url, price: price, name: name})
        setData(arr)
        handleReset()
        console.log(data)
    }

    // Deletes item from grid / data usestate

    function deleteProduct(name) {
        // console.log(name)
        console.log(data.findIndex((data) => data.name === name));
        setData(data.filter((data) => data.name !== name));
    }

    // Adds to cart

    function addToCart(price, name) {
        let arr = [...shoppingCart]
        arr.push({price: price, name: name})
        setShoppingCart(arr)
        console.log(shoppingCart)
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div>
                    <Container>

                        {/*Storefront LOGO or DESIGN would go here.*/}

                        <Typography
                            variant="h1"
                            align="center"
                            paragraph
                            style={{color: "#023047"}}
                        > STOREFRONT{" "} </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            paragraph>Add your product below.</Typography>

                        {/*Storefront input form starts here.*/}

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {m: 1, width: '25ch'},
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic1" onChange={onTextURLChange} label="Image URL"
                                       value={textValue1}
                                       variant="outlined"/>
                            <TextField id="outlined-basic2" onChange={onTextNameChange} label="Product Name"
                                       value={textValue2} variant="outlined"/>

                            {/*A different way to do it just for fun.*/}

                            <FormControl>
                                <OutlinedInput id="outlined-adornment-price"
                                               startAdornment={<InputAdornment position="start">Price</InputAdornment>}
                                               onChange={onTextPriceChange}
                                               value={textValue3} type="number"
                                               inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}>
                                </OutlinedInput>
                            </FormControl>

                        </Box>
                        <Box>
                            <div>
                                <Button sx={{m: 2}}
                                        variant="contained"
                                        component="label"
                                        color='neutral'

                                >
                                    Upload Product
                                    <input onClick={uploadData}
                                           type="button"
                                           hidden
                                    />
                                </Button>
                                <IconButton aria-label="cart" sx={{float: 'right'}}>
                                    <Badge badgeContent={shoppingCart.length} color="secondary">
                                        <ShoppingCartIcon/>
                                    </Badge>
                                </IconButton>
                            </div>
                        </Box>

                        {/*Storefront product grid starts here.*/}

                        <Grid container spacing={1}>
                            {data.map((product, index) => (
                                <Grid item xs={12} sm={3} key={index} label={product.name}>
                                    <Card sx={{
                                        display: 'block',
                                        width: '345',
                                        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                                        backgroundColor: "#fafafa",
                                        height: 1,
                                        transition: "transform 0.15s ease-in-out",
                                        "&:hover": {transform: "scale3d(1.02, 1.02, 1)"},
                                        transformStyle: 'preserve-3d',
                                    }}>
                                        <div align='right'>
                                            <IconButton aria-label="delete" size="small"
                                                        onClick={() => deleteProduct(product.name)}>
                                                <DeleteIcon fontSize="inherit"/>
                                            </IconButton>
                                        </div>
                                        <CardMedia sx={{height: 375, maxWidth: 345,}}
                                                   image={product.image}/>
                                        <CardContent>
                                            <Typography variant="h5"
                                            >
                                                <Link color='black' underline="none"> {product.name}  </Link>
                                            </Typography>
                                            <Typography variant="overline"
                                            >
                                                <Link color='black' underline="none"> {product.price} € </Link>
                                            </Typography>
                                            <div>
                                                <Button color='inviting'
                                                        onClick={() => addToCart(product.name, product.price)}
                                                        variant='contained'>Add to Cart</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
