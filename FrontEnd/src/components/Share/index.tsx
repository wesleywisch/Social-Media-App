import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions
} from '@material-ui/icons';

import person from '../../assets/person/1.jpeg';

import { ShareContainer } from './styles';

export function Share() {
  return (
    <ShareContainer>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProfileImg' src={person} alt="Pessoa" />
          <input
            type="text"
            className="shareInput"
            placeholder="What's in your mind Safak?"
          />
        </div>

        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo or Vídeo</span>
            </div>

            <div className="shareOption">
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>

            <div className="shareOption">
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>

          <button className='shareButton'>Share</button>
        </div>
      </div>
    </ShareContainer>
  )
}