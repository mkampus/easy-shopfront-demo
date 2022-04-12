import './App.css';
import {
    Badge,
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Link,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
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
                name: 'Kickin` cloth ',
                price: '50',
                image: 'https://moodle.com/wp-content/uploads/2021/06/22087-11.jpg'
            },
            {
                name: 'Bodacious fabric ',
                price: '40',
                image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566927496-button-down-4-1566927485.jpg'
            },
            {
                name: 'Cool garb ',
                price: '40',
                image: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/425095/item/goods_06_425095.jpg?width=1600&impolicy=quality_75'
            },
            {
                name: 'Rad Shirt XL',
                price: '10',
                image: 'https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png'
            },
            {
                name: 'Kickin` cloth XL',
                price: '5',
                image: 'https://moodle.com/wp-content/uploads/2021/06/22087-11.jpg'
            },
            {
                name: 'Bodacious fabric XL',
                price: '4',
                image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566927496-button-down-4-1566927485.jpg'
            },
            {
                name: 'Cool garb XL',
                price: '9',
                image: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/425095/item/goods_06_425095.jpg?width=1600&impolicy=quality_75'
            }
        ]
    )

    function onTextURLChange(e) {
        setTextValue1(e.target.value)
        setURL(e.target.value)
        console.log(url)

    }

    const onTextNameChange = (e) => {
        setTextValue2(e.target.value)
        setName(e.target.value);
        console.log(name)
    }
    const onTextPriceChange = (e) => {
        setTextValue3(e.target.value)
        setPrice(e.target.value);
        console.log(price)
    }

    const handleReset = () => {
        setTextValue1('');
        setTextValue2('')
        setTextValue3('')
    }

    const uploadData = () => {
        let arr = [...data]
        arr.push({image: url, price: price, name: name})
        setData(arr)
        handleReset()
        console.log(data)
    }

    const deleteProduct = (name) => {
        // console.log(name)
        console.log(data.findIndex((data) => data.name === name));
        setData(data.filter((data) => data.name !== name));
    }


    const addToCart = (price, name) => {
        let arr = [...shoppingCart]
        arr.push({price: price, name: name})
        setShoppingCart(arr)
        console.log(shoppingCart)
    }

    return (
        <div className="App">

            <div>

                <Container>

                    <Typography
                        color="textPrimary"
                        variant="h3"
                        align="center"
                        paragraph
                    > Storefront{" "} </Typography>

                    <Typography color="textPrimary"
                                variant="h4"
                                align="center"
                                paragraph>Add your product below.</Typography>


                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic1" onChange={onTextURLChange} label="Image URL" value={textValue1}
                                   variant="outlined"/>
                        <TextField id="outlined-basic2" onChange={onTextNameChange} label="Product Name"
                                   value={textValue2} variant="outlined"/>
                        <TextField id="outlined-basic3" onChange={onTextPriceChange} label="Product Price"
                                   value={textValue3} variant="outlined"/>
                    </Box>
                    <Box>
                        <div>
                            <Button sx={{m: 2}}
                                    variant="contained"
                                    component="label"
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

                                    <CardActionArea>
                                        <CardMedia sx={{height: 375, maxWidth: 345,}}
                                                   image={product.image}/>

                                    </CardActionArea>

                                    <CardContent>

                                        <Typography color="primary" variant="h5"
                                        >
                                            <Link href="#" underline="none"> {product.name}  </Link>
                                        </Typography>
                                        <Typography color="primary" variant="h5"
                                        >
                                            <Link href="#" underline="none"> {product.price} € </Link>
                                        </Typography>
                                        <Button onClick={() => addToCart(product.name, product.price)}
                                                variant='contained'>Add to Cart</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default App;
