import React, { Component } from 'react'
import data from '../Atoms/Data.json'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import DialogBox from '../Atoms/DialogBox'
import TextField from '@material-ui/core/TextField';

// class starts
class Search extends Component {
    constructor() {
        super();
        this.state = {
            array: [],
            songArray: [],
            open: false,
            search: ""
        }

        this.elementSubmit = this.elementSubmit.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
    }


    // submit method
    elementSubmit = (e, data) => {
        console.log('inside elementsubmit', (e.target.checked));
        console.log(data.name);
        //checkbox checked add to array
        if (e.target.checked === true) {
            let array = this.state.array;
            array.push(data.name);
            this.setState({ array });

        }
        console.log(this.state.array);
        //checkbox unchecked remove from array
        if (e.target.checked === false) {
            let dupliateArray = this.state.array;
            var index = dupliateArray.indexOf(data.name)
            if (index !== -1) {
                dupliateArray.splice(index, 1);
                this.setState({ array: dupliateArray });
            }
        }
        console.log(this.state.array);
    }

    searchSubmit = (e,data) => {
        var songName = this.state.search;
        console.log(this.state.songArray,"some array")
        console.log(this.state.search,"search value");
        const songDetails = data.filter(function(song){
            return song.name===songName;
        })
        console.log(songDetails,"songDetais"); 
        // let songArray = this.state.songArray;

        this.setState({songArray:songDetails})
        console.log(this.state.songArray,"After storing")
    }

    handleChange = (e) => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    };


    render() {
        
        return (
            <fieldset>
                <div className="searchPage">
                    <h2>Songs List!</h2>
                    <TextField type="text" placeholder="Search.." name="search" value={this.state.search} onChange={this.handleChange}/>
                    <Button  onClick={e => this.searchSubmit(e,data)}>Search</Button>
                    {/* <Button>Search</Button> */}
                    <div id="searchPrint">
                    {this.state.songArray.map((data, index) => {
                            //console.log(data + " " + index)
                            return (
                                // display json file
                                <div key={index} className="jsonData">
                                    <p>SongName: {data.name}, <br />Artist: {data.artist},<br /> Location: {data.location},<br />Album: {data.Album},<br /> Duration: {data.Duration}</p>
                                </div>

                            )
                        })}
                    </div>
                    {/* reading json file */}
                    <div className="jsonDiv">
                        {data.map((data, index) => {
                            return (
                                // display json file
                                <div key={index} className="jsonData">
                                    <p>SongName: {data.name}, <br />Artist: {data.artist},<br /> Location: {data.location},<br />Album: {data.Album},<br /> Duration: {data.Duration}</p>
                                    <Checkbox id="check_me" onChange={e => this.elementSubmit(e, data)} />
                                </div>

                            )
                        })}
                    </div>
                </div>
                {/* playlist add and display */}
                <div id="submitPlayList">
                    <div>
                        <h2>Playlist: </h2>
                    </div>
                    <div id="displayArray">
                        {this.state.array}
                    </div>
                    {/* <Button id="selector" onClick={this.onOpenModal}>Create PlayList!</Button> */}
                    <DialogBox></DialogBox>
                </div>
            </fieldset>

        )
    }
}
export default Search