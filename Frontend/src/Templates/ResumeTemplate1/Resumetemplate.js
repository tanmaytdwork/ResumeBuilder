import './Resumetemplate.css';

function Resumetemplate() {


    var UserData = {
        name:'Tanmay Deshmukh',
        position:'Software Engineer',
        aboutme:'This is about me',
        contact:'7744879983',
        place : 'Pune, India',
        email: 'tanmaytdwork@gmail.com',
        programingskills:['python','php','moodle','sql']
        

    }
  return ( 
    <div class="wrapper">
    <div class="intro">
      <div class="profile">
        <div class="photo">
          <img src="https://i.imgur.com/zh9eNsh.jpg" alt="" />
        </div>
        <div class="bio">
          <h1 class="name">{UserData.name}</h1>
          <p class="profession">{UserData.position}</p>
        </div>
      </div>
      <div class="intro-section about">
        <h1 class="title">about me</h1>
        <p class="paragraph">
          {UserData.aboutme}
        </p>
      </div>
      <div class="intro-section contact">
        <h1 class="title">Contact</h1>
        <div class="info-section">
          <i class="fas fa-phone"></i>
          <span>{UserData.contact}</span>
        </div>
        <div class="info-section">
          <i class="fas fa-map-marker-alt"></i>
          <span>{UserData.place}</span>
        </div>
        <div class="info-section">
          <i class="fas fa-paper-plane"></i>
          <span>{UserData.email}</span>
        </div>
      
      </div>
     
    </div>

    
    <div class="detail">
      <div class="detail-section edu">

        {/* work */}

        <div class="title-icon">
            <i class="fas fa-user-graduate"></i>
          </div>
          <span>Work</span>
        </div>
        <div class="detail-content">
          <div class="timeline-block">
            <h1>Department of Computer Science</h1>
            <p>National Tsing Hua University, Taiwan</p>
            <time>2015 - 2019</time>
          </div>
          <div class="timeline-block">
            <h1>Institute of Computer Science and Engineering</h1>
            <p>National Chiao Tung University, Taiwan</p>
            <time>2020 - present</time>
          </div>

          {/* End */}

        <div class="detail-title">
          <div class="title-icon">
            <i class="fas fa-user-graduate"></i>
          </div>
          <span>Eduation</span>
        </div>
        <div class="detail-content">
          <div class="timeline-block">
            <h1>Department of Computer Science</h1>
            <p>National Tsing Hua University, Taiwan</p>
            <time>2015 - 2019</time>
          </div>
          <div class="timeline-block">
            <h1>Institute of Computer Science and Engineering</h1>
            <p>National Chiao Tung University, Taiwan</p>
            <time>2020 - present</time>
          </div>


          

        </div>
      </div>

      <div class="detail-section pg-skill">
        <div class="detail-title">
          <div class="title-icon">
            <i class="fas fa-laptop-code"></i>
          </div>
          <span>Programming skills</span>
        </div>
        <div class="detail-content">
          <ul class="pg-list">
            {UserData.programingskills.map((skills)=>
            <li>
              <span>{skills}</span>
              <div class="sb-skeleton">
                <div class="skillbar" ></div>
              </div>
            </li>
            )}
          </ul>
        </div>
      </div>
      <div class="detail-section tool-skill">
        <div class="detail-title">
          <div class="title-icon">
            <i class="fas fa-tools"></i>
          </div>
          <span>Developement Tools</span>
        </div>
        <div class="detail-content">
          <ul class="tool-list">
            <li>
              <svg viewbox="0 0 100 100">
                <circle cx="50" cy="50" r="45"></circle>
                <circle class="cbar" cx="50" cy="50" r="45" ></circle>
              </svg>
              <span class="tl-name">Photoshop</span>
              <span class="tl-exp">60%</span>
            </li>
            <li>
              <svg viewbox="0 0 100 100">
                <circle cx="50" cy="50" r="45"></circle>
                <circle class="cbar" cx="50" cy="50" r="45" ></circle>
              </svg>
              <span class="tl-name">Sublime</span>
              <span class="tl-exp">80%</span>
            </li>
            <li>
              <svg viewbox="0 0 100 100">
                <circle cx="50" cy="50" r="45"></circle>
                <circle class="cbar" cx="50" cy="50" r="45" ></circle>
              </svg>
              <span class="tl-name">Git</span>
              <span class="tl-exp">70%</span>
            </li>
            <li>
              <svg viewbox="0 0 100 100">
                <circle cx="50" cy="50" r="45"></circle>
                <circle class="cbar" cx="50" cy="50" r="45" ></circle>
              </svg>
              <span class="tl-name">NPM</span>
              <span class="tl-exp">74%</span>
            </li>
          </ul>
        </div>
  
      </div>
      <div class="detail-section interests">
        <div class="detail-title">
          <div class="title-icon">
            <i class="fas fa-heart"></i>
          </div>
          <span>Interests</span>
        </div>
        <div class="detail-content">
          <div class="outer-frame">
            <ul class="favor-list">
              <li>
                <i class="fas fa-gamepad"></i>
                <span>Game</span>
              </li>
              <li>
                <i class="fas fa-paw"></i>
                <span>Pet</span>
              </li>
              <li>
                <i class="far fa-headphones-alt"></i>
                <span>Music</span>
              </li>
              <li>
                <i class="fas fa-book-spells"></i>
                <span>Self-learning</span>
              </li>
              <li>
                <i class="fas fa-user-edit"></i>
                <span>Blog</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}



export default Resumetemplate;