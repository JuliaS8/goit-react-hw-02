import css from './Options.module.css'


const Options = ({onFeedbackUpdate, showButtonReset}) => {
  return (
      <div>
          <ul className={css.buttonsList}>
              <li>
                  <button type="button" onClick={() => onFeedbackUpdate('good')} className={css.optionsButton}>Good</button>
              </li>
              <li>
                  <button type="button" onClick={() => onFeedbackUpdate('neutral')} className={css.optionsButton}>Neutral</button>
              </li>
              <li>
                  <button type="button" onClick={() => onFeedbackUpdate('bad')} className={css.optionsButton}>Bad</button>
              </li>
              {showButtonReset &&
              (<li>
                  <button type="button" onClick={() => onFeedbackUpdate('reset')} className={css.optionsButton}>Reset</button>
              </li>)}
          </ul>
    </div>
  )
}

export default Options;