import React, {Component} from 'react';
import axios from 'axios'

class FormProduct extends React.Component{
  constructor(){
    super()
    this.state={
        id : '',
        nama : '',
        harga : '',
    }
}

  handleChange = (e) =>{
    this.setState({ [e.target.name] : e.target.value })
}

  handleSubmit = async(e) => {
    e.preventDefault()
    console.log(this.state)
    await axios.post("http://localhost/reactapi/addProduct.php", this.state)
    this.props.history.push('/product');
}

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                <h5>𝐀𝐝𝐝 𝐏𝐫𝐨𝐝𝐮𝐜𝐭</h5>

                    <div className="form-group">
                        <label for="id">𝗜𝗱</label>
                        <input type="text" className="form-control" name="id" placeholder="𝐸𝑛𝑡𝑒𝑟 𝑌𝑜𝑢𝑟 𝐼𝑑" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="nama">𝗡𝗮𝗺𝗲</label>
                        <input type="text" className="form-control" name="nama" placeholder="𝐸𝑛𝑡𝑒𝑟 𝑌𝑜𝑢𝑟 𝑁𝑎𝑚𝑒" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="harga">𝗣𝗿𝗶𝗰𝗲</label>
                        <input type="text" className="form-control" name="harga" placeholder="𝐸𝑛𝑡𝑒𝑟 𝑌𝑜𝑢𝑟 𝑃𝑟𝑖𝑐𝑒" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-outline-warning">𝗦𝘂𝗯𝗺𝗶𝘁</button>
                    <a href="Home" class="btn btn-outline-warning" role="button" aria-pressed="true">𝐁𝐚𝐜𝐤</a>
                </form>

            </div>
        )
    }
}
export default FormProduct;
