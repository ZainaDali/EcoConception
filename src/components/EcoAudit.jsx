import React from 'react';

const EcoAudit = () => {
  return (
    <div className="audit-container">
      <header className="audit-header">
        <h1>Audit d'Éco-conception<br />Bouygues Telecom</h1>
      </header>

      <section className="audit-section">
        <h2>🔍 Objectif de l'audit</h2>
        <p>
          Évaluer l’impact environnemental des services numériques de Bouygues Telecom
          et identifier les pistes d’amélioration via une approche éco-conçue.
        </p>
      </section>

      <section className="audit-section">
        <h2>♻️ Analyse des Pratiques</h2>
        <ul>
          <li><strong>Infrastructure IT :</strong> Hébergement partiellement optimisé.</li>
          <li><strong>Applications web :</strong> Pages web à alléger davantage.</li>
          <li><strong>Énergie :</strong> Mix énergétique encore perfectible.</li>
          <li><strong>Matériel :</strong> Reconditionnement encouragé.</li>
        </ul>
      </section>

      <section className="audit-section">
        <h2>✅ Bonnes Pratiques</h2>
        <ul>
          <li>Recyclage des terminaux.</li>
          <li>Design épuré.</li>
          <li>Énergies renouvelables partiellement intégrées.</li>
        </ul>
      </section>

      <section className="audit-section">
        <h2>🚧 Recommandations</h2>
        <ul>
          <li>Optimiser les images et scripts.</li>
          <li>Mettre en cache et charger paresseusement.</li>
          <li>Former les équipes à l’éco-conception.</li>
        </ul>
      </section>

      <footer className="audit-footer">
        Dernière mise à jour : Juin 2025 – Document à usage académique uniquement.
      </footer>
    </div>
  );
};

export default EcoAudit;
