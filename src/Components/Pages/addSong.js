import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Popup from '../Atoms/PopUp'

// state variables
const initialState = {
    name: "",
    artist: "",
    location: "",
    album: "",
    time: "",
    tags: "",
    nameError: "",
    artistError: "",
    locationError: "",
    albumError: "",
    timeError: "",
    tagsError: "",
};


//class starts here
class addSong extends React.Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };
    //validation 
    validate = () => {
        let nameError = "";
        let artistError = "";
        let locationError = "";
        let albumError = "";
        let timeError = "";
        let tagsError = "";

        if (!this.state.name) {
            nameError = "name cannot be blank";
        }

        if (!this.state.artist) {
            artistError = "invalid artist";
        }
        if (!this.state.location) {
            locationError = "invalid location";
        }
        if (!this.state.album) {
            albumError = "invalid album";
        }
        if (!this.state.time) {
            timeError = "invalid time";
        }
        if (!this.state.tags) {
            tagsError = "invalid tags";
        }

        if (artistError || nameError || locationError || albumError || timeError || tagsError) {
            this.setState({ artistError, nameError, locationError, albumError, timeError, tagsError });
            return false;
        }

        return true;
    };

    //submit form method
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
    };


    //clear form method
    handleClearForm = (e) => {
        let path = `/search`;
        this.props.history.push(path);
    }

    render() {
        return (
            <fieldset>
                <form onSubmit={this.handleSubmit}>
                    {/* name field */}
                    <div>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                value={this.state.name}
                                variant="outlined"
                                required
                                id="name"
                                label="SongTitle/Name: "
                                autoFocus
                                onChange={this.handleChange}
                                placeholder="SongTitle/Name:"
                            />
                        </Grid>

                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.nameError}
                        </div>
                    </div>

                    {/* atrist field */}
                    <div>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="artist"
                                name="artist"
                                variant="outlined"
                                required
                                id="artist"
                                label="Artist: "
                                autoFocus
                                onChange={this.handleChange}
                                placeholder="Artist"
                                value={this.state.artist}
                            />
                        </Grid>

                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.artistError}
                        </div>
                    </div>

                    {/* location field */}
                    <div>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="location"
                                name="location"
                                variant="outlined"
                                required
                                id="location"
                                label="Location: "
                                autoFocus
                                onChange={this.handleChange}
                                placeholder="Location"
                                value={this.state.location}
                            />
                        </Grid>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.locationError}
                        </div>
                    </div>

                    {/* album field */}
                    <div>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="album"
                                name="album"
                                variant="outlined"
                                required
                                id="album"
                                label="Album: "
                                autoFocus
                                onChange={this.handleChange}
                                placeholder="Album"
                                value={this.state.album}
                            />
                        </Grid>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.albumError}
                        </div>
                    </div>

                    {/* duration field */}
                    <div>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="time"
                                name="time"
                                variant="outlined"
                                required
                                id="time"
                                label="Duration: "
                                autoFocus
                                onChange={this.handleChange}
                                placeholder="Format MM:SS"
                                value={this.state.time}
                            />
                        </Grid>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.timeError}
                        </div>
                    </div>

                    {/* tags field */}
                    <div>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="tags"
                                name="tags"
                                variant="outlined"
                                required
                                id="tags"
                                label="Tags: "
                                autoFocus
                                onChange={this.handleChange}
                                placeholder="Tags"
                                value={this.state.tags}
                            />
                        </Grid>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.tagsError}
                        </div>
                    </div>

                    {/* submit and cancel fields */}
                    <div>
                        <Button variant="contained" color="primary" type="submit" id="submit" onClick={this.handleSubmit}>submit</Button>
                        {/* <Button variant="contained" color="primary" type="submit" id="cancel" onClick={this.handleClearForm}>Cancel</Button> */}
                        <Popup></Popup>
                    </div>

                </form>
            </fieldset>
        );
    }
}
export default addSong;
