export default function DesignPreview() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Color Palette & Interactive Design Preview
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '3rem' }}>
        <div style={{ border: '2px solid #000', padding: '30px', textAlign: 'center', background: '#473144', color: '#FFCAD4', transition: 'transform 0.3s ease' }}>
          <div style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px' }}>Vintage Grape</div>
          <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>#473144</div>
        </div>
        <div style={{ border: '2px solid #000', padding: '30px', textAlign: 'center', background: '#FFCAD4', color: '#473144', transition: 'transform 0.3s ease' }}>
          <div style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px' }}>Pastel Pink</div>
          <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>#FFCAD4</div>
        </div>
      </div>
      
      <div style={{ marginBottom: '4rem', border: '2px solid #000', padding: '30px' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#473144' }}>
          Navigation Bar
        </div>
        <div style={{ background: '#473144', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ color: '#ffffff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>BRIANA MAE BELARDO</div>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <a href="#" style={{ color: '#ffffff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.85rem' }}>Home</a>
            <a href="#" style={{ color: '#ffffff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.85rem' }}>About</a>
            <a href="#" style={{ color: '#ffffff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.85rem' }}>Projects</a>
            <button style={{ background: '#FFCAD4', color: '#473144', padding: '10px 20px', border: '2px solid #473144', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.85rem', fontWeight: 'bold', cursor: 'pointer' }}>
              Newsletter
            </button>
          </div>
        </div>
        <div style={{ background: '#f5f5f5', borderLeft: '4px solid #473144', padding: '15px', marginTop: '2rem', fontSize: '0.9rem' }}>
          <strong style={{ color: '#473144' }}>Interactive:</strong> Hover over links to see Pastel Pink color transition and underline animation. Button changes background on hover.
        </div>
      </div>
      
      <div style={{ marginBottom: '4rem', border: '2px solid #000', padding: '30px' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#473144' }}>
          Hero Section
        </div>
        <div style={{ padding: '40px 0' }}>
          <div style={{ fontSize: '3rem', color: '#473144', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            This is placeholder hero text
          </div>
          <div style={{ color: '#000', marginBottom: '2rem', maxWidth: '600px' }}>
            Use this short paragraph to explain who Briana is, the kind of work she does, and why a visitor should care.
          </div>
          <button style={{ background: '#FFCAD4', color: '#473144', padding: '15px 30px', border: '2px solid #473144', textTransform: 'uppercase', letterSpacing: '0.25em', fontWeight: 'bold', cursor: 'pointer' }}>
            Join the newsletter
          </button>
        </div>
        <div style={{ background: '#f5f5f5', borderLeft: '4px solid #473144', padding: '15px', marginTop: '2rem', fontSize: '0.9rem' }}>
          <strong style={{ color: '#473144' }}>Interactive:</strong> Button changes from Pastel Pink to Vintage Grape background on hover with smooth transition and lift effect.
        </div>
      </div>
      
      <div style={{ marginBottom: '4rem', border: '2px solid #000', padding: '30px' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#473144' }}>
          Project Cards
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '2rem' }}>
          <div style={{ border: '2px solid #473144', padding: '25px', background: '#ffffff', cursor: 'pointer' }}>
            <div style={{ color: '#473144', fontSize: '1.2rem', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold' }}>Project One</div>
            <div style={{ color: '#000', fontSize: '0.9rem' }}>Project description placeholder. Use this space to briefly explain what the project is.</div>
          </div>
          <div style={{ border: '2px solid #473144', padding: '25px', background: '#ffffff', cursor: 'pointer' }}>
            <div style={{ color: '#473144', fontSize: '1.2rem', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold' }}>Project Two</div>
            <div style={{ color: '#000', fontSize: '0.9rem' }}>Project description placeholder. Highlight outcomes, impact, or a sharp angle.</div>
          </div>
          <div style={{ border: '2px solid #473144', padding: '25px', background: '#ffffff', cursor: 'pointer' }}>
            <div style={{ color: '#473144', fontSize: '1.2rem', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold' }}>Project Three</div>
            <div style={{ color: '#000', fontSize: '0.9rem' }}>Project description placeholder. Keep this tight, specific, and easy to scan.</div>
          </div>
        </div>
        <div style={{ background: '#f5f5f5', borderLeft: '4px solid #473144', padding: '15px', marginTop: '2rem', fontSize: '0.9rem' }}>
          <strong style={{ color: '#473144' }}>Interactive:</strong> Hover over cards to see Pastel Pink background fill with smooth transition and card lift effect.
        </div>
      </div>
      
      <div style={{ marginBottom: '4rem', border: '2px solid #000', padding: '30px' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#473144' }}>
          Newsletter Section
        </div>
        <div style={{ background: '#FFCAD4', padding: '40px', marginTop: '2rem' }}>
          <div style={{ color: '#473144', fontSize: '2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Weekly Signal</div>
          <div style={{ color: '#473144', marginBottom: '20px' }}>
            This is placeholder copy for Briana&apos;s newsletter. Use this space to clearly state who the newsletter is for.
          </div>
          <div>
            <input type="email" placeholder="Enter your email" style={{ padding: '12px 20px', border: '2px solid #473144', background: '#ffffff', color: '#473144', fontSize: '1rem', width: '300px', maxWidth: '100%', marginRight: '10px' }} />
            <button style={{ background: '#473144', color: '#FFCAD4', padding: '12px 25px', border: '2px solid #473144', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', cursor: 'pointer' }}>
              Subscribe
            </button>
          </div>
        </div>
        <div style={{ background: '#f5f5f5', borderLeft: '4px solid #473144', padding: '15px', marginTop: '2rem', fontSize: '0.9rem' }}>
          <strong style={{ color: '#473144' }}>Interactive:</strong> Input has focus state with subtle shadow. Button inverts colors on hover with scale effect.
        </div>
      </div>
      
      <div style={{ marginTop: '3rem', padding: '20px', background: '#f5f5f5', border: '2px solid #000' }}>
        <h2 style={{ color: '#473144', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Design Notes</h2>
        <ul style={{ lineHeight: '2', color: '#000' }}>
          <li><strong>Vintage Grape (#473144):</strong> Used for backgrounds, text, borders, and primary interactive elements</li>
          <li><strong>Pastel Pink (#FFCAD4):</strong> Used for accents, hover states, buttons, and secondary backgrounds</li>
          <li><strong>Interactions:</strong> Smooth color transitions, hover effects, subtle transforms (lift, scale), and underline animations</li>
          <li><strong>Maintains:</strong> Bold typography, high contrast, minimal aesthetic, uppercase text for navigation/buttons</li>
        </ul>
      </div>
    </div>
  );
}
