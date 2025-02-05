export default function ParamsDisplay() {
  return (
    <div className="container-params-wrapper">
      <h1 className="container-params-title">System requirements:</h1>
      <section className="section-title-wrapper">
        <h1 className="container-params-title-section">Minimum:</h1>
        <h1 className="container-params-title-section">Recommended:</h1>
      </section>
      <section className="container-params-selection-wrapper">
        <div className="param-section">
          <ul>
            <li>OS: Windows 10</li>
            <li>Processor: Intel Core i5-8400 | AMD RYZEN 3 3300X </li>
            <li>Memory: 12 GB RAM</li>
            <li>
              Graphics: Nvidia GeForce GTX 1060, 3 GB | AMD Radeon RX 580, 4 GB
            </li>
            <li>DirectX: Version 12 (Feature Level 12.0)</li>
            <li>Storage: 60 GB available space</li>
            <li>Sound Card: Windows-Compatible Audio device</li>

            <p className="italical-para">
              Current specs are valid for launch day and may be updated in the
              future
            </p>
          </ul>
        </div>
        <div className="param-section">
          <ul>
            <li>OS: Windows 11/10</li>
            <li>Processor: Intel Core i7-8700K | AMD Ryzen 5 3600X </li>
            <li>Memory: 16 GB RAM</li>
            <li>
              Graphics: Nvidia GeForce GTX 1070, 8 GB | AMD Radeon RX VEGA 56, 8
              GB
            </li>
            <li>DirectX: Version 12 (Feature Level 12.0)</li>
            <li>Storage: 60 GB available space</li>
            <li>Sound Card: Windows-Compatible Audio device</li>

            <p className="italical-para">
              Current specs are valid for launch day and may be updated in the
              future
            </p>
          </ul>
        </div>
      </section>
    </div>
  );
}
