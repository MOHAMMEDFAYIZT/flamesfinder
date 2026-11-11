const faqs = [
  {
    question: "What is a FLAMES calculator?",
    answer:
      "A FLAMES calculator is an online version of the classic name game. Enter two names, remove matching letters, and use the remaining count to cycle through F-L-A-M-E-S for a playful result.",
  },
  {
    question: "What does FLAMES stand for?",
    answer:
      "FLAMES stands for Friends, Love, Affection, Marriage, Enemy, and Siblings. These are playful game categories, not predictions about a real relationship.",
  },
  {
    question: "How do I play the FLAMES name game?",
    answer:
      "Enter two names in the calculator and start the game. The classic method removes letters shared by both names, counts the unmatched letters, and uses that count to eliminate letters from FLAMES until one category remains.",
  },
  {
    question: "Is the FLAMES love calculator scientifically accurate?",
    answer:
      "No. FLAMES is a traditional entertainment game. Its result is random-style fun based on the names entered and should not be treated as a real compatibility test or relationship advice.",
  },
];

const SeoContent = () => (
  <section
    aria-labelledby="flames-guide-title"
    className="max-w-3xl mx-auto mt-12 sm:mt-16 px-4"
  >
    <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-8">
      <div className="space-y-3">
        <h2 id="flames-guide-title" className="text-2xl sm:text-3xl font-bold text-foreground">
          Free FLAMES Calculator – Play the Classic Name Game
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Remember the FLAMES game from school? This free online FLAMES calculator
          brings the classic name compatibility game to your browser. Enter two
          names, let the game count the letters, and reveal a playful result.
          It is a lighthearted way to have fun with friends.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">What does FLAMES mean?</h3>
        <p className="text-muted-foreground leading-relaxed">
          Each letter in FLAMES represents one possible game result:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {[
            ["F", "Friends"],
            ["L", "Love"],
            ["A", "Affection"],
            ["M", "Marriage"],
            ["E", "Enemy"],
            ["S", "Siblings"],
          ].map(([letter, meaning]) => (
            <li key={letter} className="rounded-lg border border-border/60 p-3">
              <strong className="text-primary">{letter}</strong>
              <span className="text-foreground"> — {meaning}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">How to use this FLAMES name calculator</h3>
        <ol className="list-decimal pl-5 space-y-2 text-muted-foreground leading-relaxed">
          <li>Enter the first person's name.</li>
          <li>Enter the second person's name.</li>
          <li>Start the FLAMES game and watch the result animation.</li>
          <li>Enjoy the result and share the fun with your friends.</li>
        </ol>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">How does the classic FLAMES game work?</h3>
        <p className="text-muted-foreground leading-relaxed">
          In the traditional version, matching letters in the two names are
          crossed out. The remaining unmatched letters are counted. That count
          is used to cycle through the six letters in FLAMES, removing one
          category at a time until a final letter remains. Different versions
          of the game may use slightly different counting rules.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">FLAMES calculator FAQs</h3>
        {faqs.map((faq) => (
          <details key={faq.question} className="group border-b border-border/60 pb-4 last:border-0">
            <summary className="cursor-pointer font-medium text-foreground marker:text-primary">
              {faq.question}
            </summary>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        FLAMES Finder is made for entertainment. A name-game result cannot measure
        real feelings, compatibility, or the future of a relationship.
      </p>
    </div>
  </section>
);

export default SeoContent;
