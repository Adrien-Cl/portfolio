// ─── Constantes d'animation partagées ────────────────────────────────────────
// Centralise les valeurs d'animation pour garantir la cohérence visuelle.
// Importer depuis ce fichier plutôt que de redéfinir localement.

/** Courbe cubic-bezier élégante utilisée partout dans l'app */
export const ease = [0.25, 0.1, 0.25, 1] as const;

/** Variante fade + montée (pour les révélations au scroll et au chargement) */
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease },
  }),
};

/** Variante fade simple */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease },
  }),
};

/** Variante slide depuis la gauche (pour les descriptions en liste) */
export const slideInLeft = {
  hidden: { opacity: 0, x: -10 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay, ease },
  }),
};

/** Config du spring pour la barre de progression */
export const scrollSpringConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};
