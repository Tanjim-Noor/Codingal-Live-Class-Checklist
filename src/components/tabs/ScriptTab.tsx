export function ScriptTab() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h3 className="font-bold text-lg mb-2">Opening (0-2 min)</h3>
        <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
        <p className="text-sm italic text-gray-800">
          Hello [Student Name]! Welcome to your first Codingal Plus class! I am so excited to have you here! 
          How was your day today? Did anything fun happen at school?
        </p>
        <p className="text-xs text-gray-600 mt-2">Big smile, cheerful tone, genuine interest</p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-4">
        <h3 className="font-bold text-lg mb-2">Teacher Introduction (2-5 min)</h3>
        <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
        <p className="text-sm italic text-gray-800">
          Let me introduce myself! My name is [Your Name], and I have been teaching coding to students your age for [X years]. 
          I have helped hundreds of students create amazing games, apps, and projects! Some of my students have built racing games, 
          animation projects, and even their own websites. Today, we are going to start an exciting journey together. 
          Congratulations on joining Codingal Plus!
        </p>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
        <h3 className="font-bold text-lg mb-2">Ice-Breaker Activity (5-15 min)</h3>
        <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
        <p className="text-sm italic text-gray-800">
          Now let us get to know each other! I would like each of you to introduce yourself. Please share: your name, 
          which school you go to, which country you are from, your favorite hobby, and any sports or activities you enjoy. 
          Who would like to go first?
        </p>
        <p className="text-xs text-gray-600 mt-2">Encourage each student, make them comfortable, remember details</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
        <h3 className="font-bold text-lg mb-2">Brain Warm-Up Game (15-20 min)</h3>
        <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
        <p className="text-sm italic text-gray-800">
          Before we start coding, let us warm up our brains with a fun game! This will help us think like programmers. 
          I am going to share my screen and we will play a quick game together.
        </p>
        <div className="text-xs text-gray-600 mt-2 space-y-1">
          <div>Ages 1-3: Brain for Monster Truck</div>
          <div>Ages 4-5: Numbers game</div>
          <div>Ages 6-8: Cannon Strike</div>
          <div>Ages 9-12: Arithmetica</div>
        </div>
      </div>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
        <h3 className="font-bold text-lg mb-2">Dashboard Walkthrough (20-25 min)</h3>
        <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
        <p className="text-sm italic text-gray-800">
          Now let me show you something really cool - your student dashboard! This is where you will see all your lessons, 
          certificates, and projects. Let me share my screen and login as a student. Look at these sections: 
          here is where you will find free doubt sessions if you need help, here are your lessons, your quizzes, 
          and best of all - your certificates when you complete modules!
        </p>
      </div>

      <div className="bg-pink-50 border-l-4 border-pink-500 p-4">
        <h3 className="font-bold text-lg mb-2">Inspiration Video (25-29 min)</h3>
        <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
        <p className="text-sm italic text-gray-800">
          Before we start our lesson, I want to show you a short video about why learning coding is so amazing 
          and how it can help you in the future. Let us watch together!
        </p>
        <p className="text-xs text-gray-600 mt-2">Show video: https://youtu.be/nKIu9yen5nc</p>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <h3 className="font-bold text-lg mb-2">During Activity</h3>
        <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
        <p className="text-sm italic text-gray-800">
          Great job! You are doing amazing! Can you show me your screen now? 
          Let us break this activity into parts. First, we will do [Part 1], then [Part 2]. 
          What do you think we should do first? That is right! Now you try typing the code yourself...
        </p>
        <p className="text-xs text-red-600 mt-2">DO NOT dictate code. Guide with questions instead.</p>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
        <h3 className="font-bold text-lg mb-2">Class Closing (Last 5 min)</h3>
        <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
        <p className="text-sm italic text-gray-800">
          Wonderful work today! Before we finish, can you summarize what we learned today in your own words? 
          Excellent! For your after-class project, you need to [explain project]. 
          Also, please fill out the feedback form - it really helps me improve. 
          See you in the next class! Keep coding!
        </p>
      </div>

      <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
        <h3 className="font-bold text-lg mb-2">Parent Interaction (After class)</h3>
        <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
        <p className="text-sm italic text-gray-800">
          Hello! I am [Your Name], [Student] teacher for Codingal Plus. I wanted to introduce myself and let you know 
          that [Student] did wonderfully today! We covered [topics], and they showed great understanding. 
          I am excited to continue this journey together. If you have any questions, please feel free to reach out!
        </p>
      </div>
    </div>
  );
}
