const { User, sequelize } = require('./models');
const { hashPassword } = require('./utils/auth');

async function forceAdmin() {
    try {
        await sequelize.authenticate();
        console.log('DB Connected');

        // Don't sync, just try to update or create
        const passwordHash = await hashPassword(process.env.ADMIN_PASSWORD || 'admin123');
        const [user, created] = await User.findOrCreate({
            where: { email: process.env.ADMIN_EMAIL || 'admin@geraetewelt.com' },
            defaults: {
                name: 'Admin Gerätewelt',
                passwordHash,
                role: 'Admin'
            }
        });

        if (!created) {
            user.passwordHash = passwordHash;
            user.role = 'Admin';
            await user.save();
            console.log('Updated existing admin password');
        } else {
            console.log('Created new admin user');
        }

        process.exit(0);
    } catch (err) {
        console.error('Failed:', err);
        process.exit(1);
    }
}

forceAdmin();
